/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Previews } from "@react-buddy/ide-toolbox";
import { PaletteTree } from "./palette";

const ComponentPreviews = () => {
  return <Previews palette={<PaletteTree />}></Previews>;
};

export default ComponentPreviews;
