/**
 * コンテキストマネージャー
 */
interface Context {
    close: CallableFunction
}

function with_(...contexts: Context[]) {
    return function(func: CallableFunction) {
        try {
            func(...contexts);
        } catch(e) {
            throw e
        } finally {
            contexts.forEach(context => context.close());
        }
    }
}