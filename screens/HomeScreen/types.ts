import {Flashcard} from "../../models/FlashcardModel.ts";

export interface FlashcardWithId extends Flashcard {
    id: string;
}