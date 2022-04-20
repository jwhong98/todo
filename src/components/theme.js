import lightBGM from "../images/bg-mobile-light.jpg";
import lightBGD from "../images/bg-desktop-light.jpg";
import darkBGM from "../images/bg-mobile-dark.jpg";
import darkBGD from "../images/bg-desktop-dark.jpg";

export const lightTheme = {
  headerBGM: lightBGM,
  headerBGD: lightBGD,
  colors: {
    listBackground: "#fff",
    background: "hsl(0, 0%, 98%)",
    active: "hsl(235, 19%, 35%)",
    complete: "hsl(233, 11%, 84%)",
    body: "hsl(0, 0%, 98%)",
    button: "hsl(236, 9%, 61%)",
    action: "hsl(236, 9%, 61%)",
    border: "hsl(236, 33%, 92%)",
  },
};

export const darkTheme = {
  headerBGM: darkBGM,
  headerBGD: darkBGD,
  colors: {
    listBackground: "hsl(235, 24%, 19%)",
    background: "hsl(235, 21%, 11%)",
    active: "hsl(234, 39%, 85%)",
    complete: "hsl(233, 14%, 35%)",
    button: "hsl(234, 11%, 52%)",
    action: "hsl(234, 11%, 52%)",
    border: "hsl(233, 14%, 35%)",
  },
};
