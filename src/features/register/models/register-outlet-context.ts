import { QuestStep } from '../../../redux/models/quest-step.ts';
import { MutableRefObject } from 'react';

export type RegisterOutletContext = [MutableRefObject<QuestStep | null>, MutableRefObject<QuestStep | null>]