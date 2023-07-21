import { RegisterData } from '../../../redux/models/register/register-data.ts';
import { QuestStep } from '../../../redux/models/quest-step.ts';
import { MutableRefObject } from 'react';

export type RegisterOutletContext =
    [RegisterData, (data: Partial<RegisterData>) => void, MutableRefObject<QuestStep | null>, MutableRefObject<QuestStep | null>]