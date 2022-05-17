import handA from "../assets/handAvailable.svg";
import handD from "../assets/handDisabled.svg";
import handM from "../assets/handMounted.svg";
import chipA from "../assets/chip.svg";
import chipD from "../assets/chipDisabled.svg";
import chipM from "../assets/chipMounted.svg";
import soulA from "../assets/soulAvailable.svg";
import soulD from "../assets/soulDisabled.svg";
import soulM from "../assets/soulMounted.svg";

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

export const robots = {
  designer: {
    male: {},
    female: {},
  },
  front: {
    male: {},
    female: {},
  },
};

export const Parts: any = {
  hands: {
    0: "",
    1: "одного биомеханизма ",
    2: "двух биомеханизмов ",
    3: "трех биомеханизмов ",
    4: "четырех биомеханизмов ",
  },
  chips: {
    0: "",
    1: "одного процессора ",
    2: "двух процессоров ",
    3: "трех процессоров ",
    4: "четырех процессоров ",
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
