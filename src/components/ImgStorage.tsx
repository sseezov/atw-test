import handA from "../assets/handAvailable.svg";
import handM from "../assets/handMounted.svg";
import chipA from "../assets/chip.svg";
import chipM from "../assets/chipMounted.svg";
import soulA from "../assets/soulAvailable.svg";
import soulM from "../assets/soulMounted.svg";
import designerMaleD from "../assets/DesignerDisabled.svg";
import designerFemaleD from "../assets/DesignerDisabledFemale.svg";
import designerMaleA from "../assets/DesignerAvailable.svg";
import designerFemaleA from "../assets/DesignerAvailableFemale.svg";
import designerMaleM from "../assets/DesignerMounted.svg";
import designerFemaleM from "../assets/DesignerMountedFemale.svg";
import frontMaleD from "../assets/FrontDisabled.svg";
import frontFemaleD from "../assets/FrontDisabledFemale.svg";
import frontMaleA from "../assets/FrontAvailable.svg";
import frontFemaleA from "../assets/FrontAvailableFemale.svg";
import frontMaleM from "../assets/FrontMounted.svg";
import frontFemaleM from "../assets/FrontMountedFemale.svg";

export const stockImg: any = {
  hands: {
    0: handA,
    1: handM,
  },
  chips: {
    0: chipA,
    1: chipM,
  },
  souls: {
    0: soulA,
    1: soulM,
  },
};

export const robotsReady: any = {
  0: {
    0: {
      0: designerFemaleA,
      1: designerFemaleM,
    },
    1: {
      0: designerMaleA,
      1: designerMaleM,
    },
  },
  1: {
    0: {
      0: frontFemaleA,
      1: frontFemaleM,
    },
    1: {
      0: frontMaleA,
      1: frontMaleM,
    },
  },
};

export const robotsUnready: any = {
  0: {
    0: designerFemaleD,
    1: designerMaleD,
  },

  1: {
    0: frontFemaleD,
    1: frontMaleD,
  },
};

export const Parts: any = {
  hands: {
    0: "",
    1: "одного биомеханизма",
    2: "двух биомеханизмов",
    3: "трех биомеханизмов",
    4: "четырех биомеханизмов",
  },
  chips: {
    0: "",
    1: "одного процессора",
    2: "двух процессоров",
    3: "трех процессоров",
    4: "четырех процессоров",
  },
  souls: {
    0: "",
    1: "души",
  },
  money: {
    0: "",
    1: " денег",
  },
};
