export async function register() {
    const {server}= await import("./msw/server")
    server.listen()

}
