function animateText(elementId, text, delay = 0, animationDuration = 1000) {
  const element = document.getElementById(elementId);
  const originalTextChars = text.split("");
  const katakanaChars = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ", "ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ", "ユ", "ヨ", "ー", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヰ", "ヱ", "ヲ", "ン", "ガ", "ギ", "グ", "ゲ", "ゴ", "ザ", "ジ", "ズ", "ゼ", "ゾ", "ダ", "ヂ", "ヅ", "デ", "ド", "バ", "ビ", "ブ", "ベ", "ボ", "パ", "ピ", "プ", "ペ", "ポ"];
  const numChars = originalTextChars.length;
  const intervalTime = animationDuration / numChars; // Approximate interval

  let animationProgress = 0;

  async function startAnimation() {
    await new Promise(resolve => setTimeout(resolve, delay));

    const animateInterval = setInterval(() => {
      let animatedHTML = "";
      for (let i = 0; i < numChars; i++) {
        if (i < Math.floor(animationProgress)) {
          animatedHTML += `<span class="value">${originalTextChars[i]}</span>`;
        } else if (animationProgress % 1 < 0.5) {
          const randomIndex = Math.floor(Math.random() * katakanaChars.length);
          animatedHTML += `<span class="glyph">${katakanaChars[randomIndex]}</span>`;
        } else {
          animatedHTML += `<span class="glyph">${originalTextChars[i]}</span>`;
        }
      }
      element.innerHTML = animatedHTML;
      animationProgress += 0.5;

      if (animationProgress >= numChars) {
        clearInterval(animateInterval);
        element.innerHTML = originalTextChars.map(char => `<span class="value">${char}</span>`).join("");
      }
    }, Math.max(intervalTime, 20)); // Ensure a minimum interval
  }

  startAnimation();
}

// Call the animation function when the page loads
document.addEventListener('DOMContentLoaded', () => {
  animateText('animated-name', 'rahul sarkar', 500, 700); // Target the ID, text, optional delay (ms), optional duration (ms)
});