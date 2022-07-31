import {
    SystemRequest,
    SystemResponse
} from "../deps.ts";


type Template = {
    head: string,
    header: string,
    scripts: string,
    footer: string
}

/**
 * テンプレートの読み込み
 * @returns 各テンプレートの連想配列
 */
async function load_templates(): Promise<Template> {
    const readText = async function (path: string): Promise<string> {
        const res = await Deno.readTextFile(new URL(path, import.meta.url));
        return res;
    }
    
    const head =    await readText("../views/templates/head.html");
    const header =  await readText("../views/templates/header.html");
    const scripts =  await readText("../views/templates/scripts.html");
    const footer =  await readText("../views/templates/footer.html");

    return {head: head, header: header, scripts: scripts, footer: footer};
}

/**
 * indexページの表示 (get a index page.)
 * [/ => "./views/home/index.html"]
 * @param req リクエスト(SystemRequest)
 * @param res レスポンス(SystemResponse)
 */
export async function get_index(req: SystemRequest, res: SystemResponse): Promise<void> {
    await res.preset(await load_templates());
    await res.setFile("./views/home/index.html");
}

/**
 * statusページの表示 (get a status page.)
 * [/ => "./views/home/status.html"]
 * @param req リクエスト(SystemRequest)
 * @param res レスポンス(SystemResponse)
 */
export async function get_status(req: SystemRequest, res: SystemResponse): Promise<void> {
    await res.preset(await load_templates());
    await res.setFile("./views/home/status.html");
}
