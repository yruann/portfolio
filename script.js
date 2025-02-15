document.addEventListener("DOMContentLoaded", () => {
    // const wordBanks = {
    //     "w1": ["i","me","my","you","your","she","her","they","them","their","we","our","who","how","why","what","when","where","about","like","am","have","ever","there","does","need","want","with","the","will","continue","while","that","just","from","over","out","to","and","so","yet","for","not","nor","but","or","it","is","far","ful","no","yes","be","although","though","an","all","know","even","being","say","of","do","try","between","those","these","to"],
    //     "w2": ["ing","re","tion","ion","a","s","n","d","ed"],
    //     "w3": ["seek","self","deteriorate","fragment","mother","god","compose","become","restore","store","old","new","birth","make","memory","subjugate","narrative","repetition","exhaust","core","piece","humiliate","entrails","visceral","selfish","child","children","choice","autonomy","subject","pain","change","take","shape","spine","intertwine","ingest","cradle","hold","feel","complete","many"]
    // };
    const wordBanks = {
        "w1": ["them","ing","say","where","your","out","with","they","repetition","birth","although","is","we","compose","ingest","children","many","those","do","exhaust","change","become","ed","she","selfish","fragment","subject","self","yes","es", "choice","between","the","intertwine","of","be","so","while","know","over","tion","my","yet","subjugate","me","to","autonomy","that","and","i","who","but","god","a", "s", "spine","old","deteriorate","there","am","make","need","what","a","no","shape","other","complete","d","you","pain","restore","will","for","ever","new","entrails","our","humiliate","visceral","seek","how","all","narrative","feel","child","hold","just","their","far","even","ion","it","when","like","though","re","from","s","cradle","an","continue","have","nor","take","memory","store","about","to","want","her","or","why","piece","try","n","being","core","does","these","mother","ful","not","always","to", "as", "at", "end", "the", "sound", "near", "every","less", "conscious", "ious", "her", "ous", "y", "ly", "subject", "as", "bear", "exert","labor", "ness", "human", "post", "posthuman","corporeal","mass", "tethered","chest","weight","mirror","capacity","physical","state","dependent","experience","manifest","collect","fluid","existence","exist","organic","bodily","recall","source","true ","reality","archive","construct","rather","connect","creature","under","understand","without","realize","really","right","are", "keep","did", "one", "this", "may", "in", "entity"]
    };

    function renderWords(bankId) {
        const container = document.getElementById(bankId);
        container.innerHTML = "";
        wordBanks[bankId].forEach(word => {
            const wordElement = document.createElement("div");
            wordElement.classList.add("word");
            wordElement.textContent = word;
            wordElement.onclick = () => moveToSentence(wordElement);
            container.appendChild(wordElement);
        });
    }

    function moveToSentence(wordElement) {
        wordElement.onclick = () => moveToBank(wordElement);
        document.getElementById("sentence").appendChild(wordElement);
    }

    function moveToBank(wordElement) {
        const bankId = Object.keys(wordBanks).find(bank => wordBanks[bank].includes(wordElement.textContent));
        if (bankId) {
            wordElement.onclick = () => moveToSentence(wordElement);
            document.getElementById(bankId).appendChild(wordElement);
        }
    }


    Object.keys(wordBanks).forEach(renderWords);
});