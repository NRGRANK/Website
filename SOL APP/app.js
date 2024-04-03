document.addEventListener('DOMContentLoaded', () => {
    // Translations object
    const translations = {
        // All your slang terms and definitions
        "Ghosting": "Suddenly cutting off all communication with someone without explanation.",
        "Lit": "Amazing, exciting, or fun.",
        "Salty": "Being bitter or upset about something minor.",
        "Savage": "Acting without regard, often in a way that is brutally honest or harsh.",
        "Flex": "To show off.",
        "Thirsty": "Desperately seeking attention or validation, often in a romantic context.",
        "Shade": "Subtle disrespect or criticism towards someone.",
        "Tea": "Gossip or interesting news.",
        "Woke": "Being aware of social injustices and inequalities.",
        "Basic": "Lacking originality, mainstream.",
        "Simp": "Someone who does too much for someone they like or are attracted to.",
        "Clout": "Influence or fame, especially on social media.",
        "Bae": "A term of endearment, standing for 'before anyone else.'",
        "Stan": "An extremely passionate fan or supporter.",
        "Gucci": "Good or cool.",
        "FOMO": "Fear of missing out.",
        "YOLO": "You only live once.",
        "Snatched": "Looking exceptionally good, especially referring to fashion or physique.",
        "Cap/No Cap": "Lying or telling the truth.",
        "Troll": "Someone who intentionally stirs up trouble or controversy online.",
        "Mood": "Something that is relatable or represents one's current feeling/state.",
        "Slay": "To do something exceptionally well.",
        "Spill the tea": "To share gossip or the real story.",
        "Hype": "Excessive excitement or promotion around something.",
        "Ghost": "To suddenly become unresponsive to communication attempts.",
        "Lowkey": "To want something or feel something but not openly express it.",
        "Highkey": "Openly or strongly feeling something.",
        "On fleek": "Perfectly executed or styled.",
        "Turnt": "Excited, hyped, or under the influence and having a good time.",
        "Squad": "A close group of friends.",
        "Vibe": "A mood or atmosphere.",
        "Receipts": "Proof or evidence of something, usually in a conversation or argument.",
        "Shook": "Shocked or surprised.",
        "Ratchet": "Lacking class or refinement.",
        "Dope": "Cool or excellent.",
        "Throw shade": "To subtly express disapproval or contempt.",
        "Fire": "Exceptionally cool or awesome.",
        "Dead": "Overwhelmed by amusement or laughter.",
        "Sus": "Suspicious or untrustworthy.",
        "Tight": "In a close relationship; also can mean cool or excellent.",
        "Extra": "Over the top or excessive in behavior or style.",
        "Finna": "Going to or intending to.",
        "Fleek": "On point or looking good.",
        "GOAT": "Greatest of all time.",
        "Bet": "Agreement or confirmation.",
        "Hangry": "Angry because of hunger.",
        "Ship": "To endorse a romantic relationship.",
        "IRL": "In real life.",
        "Slide into DMs": "To send a direct message to someone on social media with romantic intentions.",
        "Nay": "A term indicating strong disagreement or denial.",
        "Nayhara": "A unique name, potentially fictional or specific to a personal context.",
        "Steven": "The BEST OF ALL TIME #BOAT."
        // Additional terms...
    };

    // Event listener for direct translation
    document.getElementById('translateBtn').addEventListener('click', () => {
        const inputVal = document.getElementById('slangInput').value.trim();
        const translation = translations[inputVal];

        const resultContainer = document.getElementById('translationResult');
        if (translation) {
            resultContainer.innerHTML = `<strong>${inputVal}</strong>: ${translation}`;
        } else {
            resultContainer.innerHTML = `Sorry, no translation found for "${inputVal}". Try another slang term.`;
        }
    });

    // Reverse search functionality
    function reverseSearchPhrase(phrase) {
        const lowerCasePhrase = phrase.toLowerCase();
        let closestMatch = "";
        let shortestDistance = Infinity;

        Object.entries(translations).forEach(([term, definition]) => {
            const lowerCaseDefinition = definition.toLowerCase();
            // Calculate "distance" between phrase and definition
            const distance = Math.abs(lowerCasePhrase.length - lowerCaseDefinition.length);
            
            // Check if the definition contains the phrase or vice versa
            if (lowerCaseDefinition.includes(lowerCasePhrase) || lowerCasePhrase.includes(lowerCaseDefinition)) {
                if (distance < shortestDistance) {
                    closestMatch = term;
                    shortestDistance = distance;
                }
            }
        });

        return closestMatch;
    }

    // Event listener for reverse search
    document.getElementById('searchBtn').addEventListener('click', () => {
        const inputPhrase = document.getElementById('phraseInput').value.trim();
        const matchedSlang = reverseSearchPhrase(inputPhrase);
        const resultContainer = document.getElementById('result'); // Ensure this element is in your HTML

        if (matchedSlang) {
            resultContainer.textContent = `Closest match: ${matchedSlang} - ${translations[matchedSlang]}`;
        } else {
            resultContainer.textContent = "Sorry, no matching slang term found.";
        }
    });
});
