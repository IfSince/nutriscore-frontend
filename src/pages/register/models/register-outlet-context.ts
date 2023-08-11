import { MutableRefObject } from 'react';
import { QuestStep } from '../../../common/quest-step.ts';

export type RegisterOutletContext = [MutableRefObject<QuestStep | null>, MutableRefObject<QuestStep | null>, MutableRefObject<() => void>]