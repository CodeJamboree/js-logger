import { logDone } from "./logDone.js";
import { logError } from "./error/logError.js";
import { logSection } from "./logSection.js";
import { logTitle } from "./logTitle.js";
import { logger } from "./logger.js";
import { ansi } from './ansi.js';

logger.done = logDone;
logger.onError = logError;
logger.section = logSection;
logger.title = logTitle;
logger.ansi = ansi;

export default logger;
