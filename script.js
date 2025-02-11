(async function checkForUpdates() {
  const currentVersion = "1.0";
  const versionUrl =
    "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json";

  try {
    const response = await fetch(versionUrl);
    if (!response.ok) {
      console.warn("Could not fetch version information.");
      return;
    }
    const data = await response.json();
    const latestVersion = data.version;
    const updateMessage = data.updateMessage;

    if (currentVersion !== latestVersion) {
      alert(updateMessage);
    } else {
      console.log("You are using the latest version.");
    }
  } catch (error) {
    console.error("Error checking for updates:", error);
  }
})();

const messages = [
  "Cậu chắc chưaaa?",
  "Riel khum ???",
  "Nghĩ kĩ nha cậu ơi?",
  "Cậu hong thích z lun...",
  "Thật sự lun!",
  "Nếu cậu bấm nữa, tớ sẽ buồn lắm đó...",
  "Tớ chỉ muốn đơn giản thoi mà...",
  "Cậu tệ quá...",
  "Thôi được rồi, tớ sẽ không hỏi nữa...",
  "Pnhuuuuuuuuuu!!!",
  "Đùa thôi, làm ơn nói đồng ý giùmmm! =))"
];

let messageIndex = 0;

function handleNoClick() {
  const noButton = document.querySelector(".no-button");
  const yesButton = document.querySelector(".yes-button");

  // Change text of No button
  noButton.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Increase size of Yes button
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    if (currentSize < 100) { // Limit max size to 100px
    yesButton.style.fontSize = `${Math.min(currentSize * 1.2, 100)}px`;
}


  // Randomize No button position
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;
  let randomX, randomY;

  do {
    randomX = Math.random() * maxX;
    randomY = Math.random() * maxY;
  } while (
    randomX + noButton.offsetWidth > yesButton.offsetLeft &&
    randomX < yesButton.offsetLeft + yesButton.offsetWidth &&
    randomY + noButton.offsetHeight > yesButton.offsetTop &&
    randomY < yesButton.offsetTop + yesButton.offsetHeight
  );

  noButton.style.position = "absolute";
  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
}

function handleYesClick() {
  window.location.href = "yes_page.html";
}