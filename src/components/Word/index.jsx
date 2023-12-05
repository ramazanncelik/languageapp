"use client"
import { useAppContext } from "@/context";
import translateFunction from "@/services/translateService";
import store from "@/store";
import { addItem } from "@/store/flashCards";
import { Menu } from "@headlessui/react";
import { useEffect, useState } from "react";

const Word = ({ value, isPunctuation, secondWordIsPunctuation }) => {

    const { flashCards } = useAppContext();
    const [translatedText, setTranslatedText] = useState("");
    const [isInFlashcardTranslatedText, setIsInFlashcardTranslatedText] = useState(false)

    const translate = async () => {
        if (translatedText === "") {
            const response = await translateFunction(value);
            setTranslatedText(response)
        }
    }

    const addToFlashcard = async () => {
        await store.dispatch(addItem(translatedText));
    }

    const queryTranslatedText = async () => {
        const response = await flashCards.filter(item => { return item.text == translatedText });
        if (response.length !== 0) {
            await setIsInFlashcardTranslatedText(true);
        } else {
            await setIsInFlashcardTranslatedText(false);
        }
    }

    useEffect(() => {
        if (translatedText !== "") {
            queryTranslatedText();
        }
    }, [translatedText, flashCards]);

    if (isPunctuation) {
        return (
            <span className={`${!secondWordIsPunctuation && "mr-1"} text-black w-max h-max`}>
                {value}
            </span>
        )
    } else {
        return (
            <Menu>
                <span className="relative">
                    <Menu.Button onClick={() => { translate() }} className={`${isInFlashcardTranslatedText ? "bg-purple-100" : "bg-blue-100"} cursor-pointer ${!secondWordIsPunctuation && "mr-1"} text-black w-max h-max`}>{value}</Menu.Button>
                    <Menu.Items className="absolute z-10 bg-purple-500 text-white p-2 rounded-lg inset-7 w-48 h-max flex items-center justify-center flex-col space-y-2">
                        <Menu.Item>
                            <span>{translatedText ? translatedText : value}</span>
                        </Menu.Item>

                        <Menu.Item>
                            <button
                                disabled={isInFlashcardTranslatedText}
                                className="px-4 py-2 border border-white rounded-lg bg-purple-600 hover:bg-purple-700"
                                onClick={() => addToFlashcard(translatedText)}>Add to flashcards</button>
                        </Menu.Item>
                    </Menu.Items>
                </span>
            </Menu>
        );
    }
}

export default Word;