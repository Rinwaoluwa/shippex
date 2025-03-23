import { Dimensions, PixelRatio } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const widthBaseScale = SCREEN_WIDTH / 380;
const heightBaseScale = SCREEN_HEIGHT / 820;

type Dimension = "WIDTH" | "HEIGHT";

const appTextNormalizer = (size: number, based: Dimension = "WIDTH") => {
  const newSize =
    based === "HEIGHT" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

//for width  pixel
export const widthPixel = (size: number) => {
  return appTextNormalizer(size, "WIDTH");
};
//for height  pixel
export const heightPixel = (size: number) => {
  return appTextNormalizer(size, "HEIGHT");
};

export { wp, hp };
