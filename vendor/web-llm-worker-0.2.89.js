import { WebWorkerMLCEngineHandler } from './web-llm-0.2.89.js';
const handler = new WebWorkerMLCEngineHandler();
self.onmessage = msg => handler.onmessage(msg);
