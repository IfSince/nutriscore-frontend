import { MutableRefObject } from 'react';
import { QuestStep } from '../../../common/quest-step.ts';
import { ApiErrorResponse } from '../../../api/api-slice.ts';

export type RegisterOutletContext = [MutableRefObject<QuestStep | null>, MutableRefObject<QuestStep | null>, MutableRefObject<() => void>, ApiErrorResponse]