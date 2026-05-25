import { listActiveImageGenerationTasksForSession } from "../../image-generation-task-status.js";
import { findActiveMusicGenerationTaskForSession } from "../../music-generation-task-status.js";
import { findActiveVideoGenerationTaskForSession } from "../../video-generation-task-status.js";

export function shouldSuppressGenericFallbackForActiveMediaTask(sessionKey?: string): boolean {
  const normalizedSessionKey = sessionKey?.trim();
  if (!normalizedSessionKey) {
    return false;
  }

  return (
    listActiveImageGenerationTasksForSession(normalizedSessionKey).length > 0 ||
    findActiveMusicGenerationTaskForSession(normalizedSessionKey) !== undefined ||
    findActiveVideoGenerationTaskForSession(normalizedSessionKey) !== undefined
  );
}
