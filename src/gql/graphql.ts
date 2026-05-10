/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: { input: any; output: any };
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: { input: any; output: any };
};

/** An enumeration. */
export enum AccountsUserPhoneTypeChoices {
  /** Call */
  Call = "CALL",
  /** Telegram */
  Telegram = "TELEGRAM",
  /** Whatsapp */
  Whatsapp = "WHATSAPP",
}

export type ActivateModelInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  modelId: Scalars["String"]["input"];
};

export type ActivateModelPayload = {
  __typename?: "ActivateModelPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  model?: Maybe<ModelNode>;
};

export type ChangePasswordInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  newPassword: Scalars["String"]["input"];
  oldPassword: Scalars["String"]["input"];
};

export type ChangePasswordPayload = {
  __typename?: "ChangePasswordPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserNode>;
};

export type CreateModelInput = {
  age: Scalars["Int"]["input"];
  attributes: Array<InputMaybe<ModelAttributes>>;
  boobs: Scalars["Boolean"]["input"];
  cityId: Scalars["String"]["input"];
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  eyesColor: ModelEyesColor;
  gender: ModelGender;
  hairColor: ModelHairColor;
  height: Scalars["Int"]["input"];
  images: Array<InputMaybe<Scalars["String"]["input"]>>;
  languages: Array<InputMaybe<ModelLanguages>>;
  metrics: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  nationality: ModelNationality;
  nonVisibleServices: Array<InputMaybe<ModelNonVisibleServices>>;
  party: Scalars["Boolean"]["input"];
  piercings: Scalars["Boolean"]["input"];
  services: Array<InputMaybe<ModelServices>>;
  tattoos: Scalars["Boolean"]["input"];
  videos: Array<InputMaybe<Scalars["String"]["input"]>>;
  weight: Scalars["Int"]["input"];
};

export type CreateModelPayload = {
  __typename?: "CreateModelPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  model?: Maybe<ModelNode>;
};

export type DeactivateModelInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  modelId: Scalars["String"]["input"];
};

export type DeactivateModelPayload = {
  __typename?: "DeactivateModelPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  model?: Maybe<ModelNode>;
};

export type DeleteModelInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  modelId: Scalars["String"]["input"];
};

export type DeleteModelPayload = {
  __typename?: "DeleteModelPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type EditModelInput = {
  age: Scalars["Int"]["input"];
  attributes: Array<InputMaybe<ModelAttributes>>;
  boobs: Scalars["Boolean"]["input"];
  cityId: Scalars["String"]["input"];
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  eyesColor: ModelEyesColor;
  gender: ModelGender;
  hairColor: ModelHairColor;
  height: Scalars["Int"]["input"];
  images?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  languages: Array<InputMaybe<ModelLanguages>>;
  metrics: Scalars["String"]["input"];
  modelId: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  nationality: ModelNationality;
  nonVisibleServices: Array<InputMaybe<ModelNonVisibleServices>>;
  party: Scalars["Boolean"]["input"];
  piercings: Scalars["Boolean"]["input"];
  services: Array<InputMaybe<ModelServices>>;
  tattoos: Scalars["Boolean"]["input"];
  videos?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  weight: Scalars["Int"]["input"];
};

export type EditModelPayload = {
  __typename?: "EditModelPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  model?: Maybe<ModelNode>;
};

/** An enumeration. */
export enum ModelAttributes {
  Athlete = "ATHLETE",
  Fansly = "FANSLY",
  Masseuse = "MASSEUSE",
  Onlyfans = "ONLYFANS",
  Pornhub = "PORNHUB",
  PornStar = "PORN_STAR",
  ProfessionalModel = "PROFESSIONAL_MODEL",
  Streamer = "STREAMER",
  UniversityStudent = "UNIVERSITY_STUDENT",
  Webcamer = "WEBCAMER",
  Youtuber = "YOUTUBER",
}

/** An enumeration. */
export enum ModelEyesColor {
  Black = "BLACK",
  Blue = "BLUE",
  Brown = "BROWN",
  Green = "GREEN",
  Hazel = "HAZEL",
}

/** An enumeration. */
export enum ModelGender {
  Transgender = "TRANSGENDER",
  Woman = "WOMAN",
}

/** An enumeration. */
export enum ModelHairColor {
  Black = "BLACK",
  Blonde = "BLONDE",
  Brown = "BROWN",
  Other = "OTHER",
  Red = "RED",
}

export type ModelImageNode = Node & {
  __typename?: "ModelImageNode";
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  imageUrl?: Maybe<Scalars["String"]["output"]>;
  model: ModelNode;
};

/** An enumeration. */
export enum ModelLanguages {
  Chinese = "CHINESE",
  English = "ENGLISH",
  French = "FRENCH",
  German = "GERMAN",
  Italian = "ITALIAN",
  Portuguese = "PORTUGUESE",
  Russian = "RUSSIAN",
  Spanish = "SPANISH",
}

/** An enumeration. */
export enum ModelNationality {
  Ad = "AD",
  Ae = "AE",
  Af = "AF",
  Ag = "AG",
  Ai = "AI",
  Al = "AL",
  Am = "AM",
  An = "AN",
  Ao = "AO",
  Aq = "AQ",
  Ar = "AR",
  As = "AS",
  At = "AT",
  Au = "AU",
  Aw = "AW",
  Ax = "AX",
  Az = "AZ",
  Ba = "BA",
  Bb = "BB",
  Bd = "BD",
  Be = "BE",
  Bf = "BF",
  Bg = "BG",
  Bh = "BH",
  Bi = "BI",
  Bj = "BJ",
  Bl = "BL",
  Bm = "BM",
  Bn = "BN",
  Bo = "BO",
  Br = "BR",
  Bs = "BS",
  Bt = "BT",
  Bw = "BW",
  By = "BY",
  Bz = "BZ",
  Ca = "CA",
  Cc = "CC",
  Cd = "CD",
  Cf = "CF",
  Cg = "CG",
  Ch = "CH",
  Ci = "CI",
  Ck = "CK",
  Cl = "CL",
  Cm = "CM",
  Cn = "CN",
  Co = "CO",
  Cr = "CR",
  Cu = "CU",
  Cv = "CV",
  Cx = "CX",
  Cy = "CY",
  Cz = "CZ",
  De = "DE",
  Dj = "DJ",
  Dk = "DK",
  Dm = "DM",
  Do = "DO",
  Dz = "DZ",
  Ec = "EC",
  Ee = "EE",
  Eg = "EG",
  Er = "ER",
  Es = "ES",
  Et = "ET",
  Fi = "FI",
  Fj = "FJ",
  Fk = "FK",
  Fm = "FM",
  Fo = "FO",
  Fr = "FR",
  Ga = "GA",
  Gb = "GB",
  Gd = "GD",
  Ge = "GE",
  Gf = "GF",
  Gg = "GG",
  Gh = "GH",
  Gi = "GI",
  Gl = "GL",
  Gm = "GM",
  Gn = "GN",
  Gp = "GP",
  Gq = "GQ",
  Gr = "GR",
  Gs = "GS",
  Gt = "GT",
  Gu = "GU",
  Gw = "GW",
  Gy = "GY",
  Hk = "HK",
  Hn = "HN",
  Hr = "HR",
  Ht = "HT",
  Hu = "HU",
  Id = "ID",
  Ie = "IE",
  Il = "IL",
  Im = "IM",
  In = "IN",
  Io = "IO",
  Iq = "IQ",
  Ir = "IR",
  Is = "IS",
  It = "IT",
  Je = "JE",
  Jm = "JM",
  Jo = "JO",
  Jp = "JP",
  Ke = "KE",
  Kg = "KG",
  Kh = "KH",
  Ki = "KI",
  Km = "KM",
  Kn = "KN",
  Kp = "KP",
  Kr = "KR",
  Kw = "KW",
  Ky = "KY",
  Kz = "KZ",
  La = "LA",
  Lb = "LB",
  Lc = "LC",
  Li = "LI",
  Lk = "LK",
  Lr = "LR",
  Ls = "LS",
  Lt = "LT",
  Lu = "LU",
  Lv = "LV",
  Ly = "LY",
  Ma = "MA",
  Mc = "MC",
  Md = "MD",
  Me = "ME",
  Mf = "MF",
  Mg = "MG",
  Mh = "MH",
  Mk = "MK",
  Ml = "ML",
  Mm = "MM",
  Mn = "MN",
  Mo = "MO",
  Mp = "MP",
  Mq = "MQ",
  Mr = "MR",
  Ms = "MS",
  Mt = "MT",
  Mu = "MU",
  Mv = "MV",
  Mw = "MW",
  Mx = "MX",
  My = "MY",
  Mz = "MZ",
  Na = "NA",
  Nc = "NC",
  Ne = "NE",
  Nf = "NF",
  Ng = "NG",
  Ni = "NI",
  Nl = "NL",
  No = "NO",
  Np = "NP",
  Nr = "NR",
  Nu = "NU",
  Nz = "NZ",
  Om = "OM",
  Pa = "PA",
  Pe = "PE",
  Pf = "PF",
  Pg = "PG",
  Ph = "PH",
  Pk = "PK",
  Pl = "PL",
  Pm = "PM",
  Pn = "PN",
  Pr = "PR",
  Ps = "PS",
  Pt = "PT",
  Pw = "PW",
  Py = "PY",
  Qa = "QA",
  Re = "RE",
  Ro = "RO",
  Rs = "RS",
  Ru = "RU",
  Rw = "RW",
  Sa = "SA",
  Sb = "SB",
  Sc = "SC",
  Sd = "SD",
  Se = "SE",
  Sg = "SG",
  Sh = "SH",
  Si = "SI",
  Sj = "SJ",
  Sk = "SK",
  Sl = "SL",
  Sm = "SM",
  Sn = "SN",
  So = "SO",
  Sr = "SR",
  Ss = "SS",
  St = "ST",
  Sv = "SV",
  Sy = "SY",
  Sz = "SZ",
  Tc = "TC",
  Td = "TD",
  Tg = "TG",
  Th = "TH",
  Tj = "TJ",
  Tk = "TK",
  Tl = "TL",
  Tm = "TM",
  Tn = "TN",
  To = "TO",
  Tr = "TR",
  Tt = "TT",
  Tv = "TV",
  Tw = "TW",
  Tz = "TZ",
  Ua = "UA",
  Ug = "UG",
  Us = "US",
  Uy = "UY",
  Uz = "UZ",
  Va = "VA",
  Vc = "VC",
  Ve = "VE",
  Vg = "VG",
  Vi = "VI",
  Vn = "VN",
  Vu = "VU",
  Wf = "WF",
  Ws = "WS",
  Ye = "YE",
  Yt = "YT",
  Za = "ZA",
  Zm = "ZM",
  Zw = "ZW",
}

export type ModelNode = Node & {
  __typename?: "ModelNode";
  activationDate?: Maybe<Scalars["DateTime"]["output"]>;
  age: Scalars["Int"]["output"];
  /** Selecciona los atributos disponibles */
  attributes: Array<Maybe<Scalars["String"]["output"]>>;
  boobs: Scalars["Boolean"]["output"];
  createdAt: Scalars["DateTime"]["output"];
  description?: Maybe<Scalars["String"]["output"]>;
  eyesColor: ModelsModelEyesColorChoices;
  featuredDate?: Maybe<Scalars["DateTime"]["output"]>;
  gender: ModelsModelGenderChoices;
  hairColor: ModelsModelHairColorChoices;
  height?: Maybe<Scalars["Int"]["output"]>;
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  images?: Maybe<Array<Maybe<ModelImageNode>>>;
  isActive: Scalars["Boolean"]["output"];
  isFeatured: Scalars["Boolean"]["output"];
  isVerified: Scalars["Boolean"]["output"];
  languages?: Maybe<Array<Maybe<ModelLanguages>>>;
  /** Enter measurements in the format 60-90-60 */
  metrics?: Maybe<Scalars["String"]["output"]>;
  name: Scalars["String"]["output"];
  nationality: ModelsModelNationalityChoices;
  nonVisibleServices: Array<Maybe<Scalars["String"]["output"]>>;
  party: Scalars["Boolean"]["output"];
  piercings: Scalars["Boolean"]["output"];
  rangeType: ModelsModelRangeTypeChoices;
  /** Selecciona los modos de servicio disponibles */
  serviceModes: Array<Maybe<Scalars["String"]["output"]>>;
  services?: Maybe<Array<Maybe<ModelServices>>>;
  smoker: Scalars["Boolean"]["output"];
  tattoos: Scalars["Boolean"]["output"];
  updatedAt: Scalars["DateTime"]["output"];
  user: UserNode;
  videos?: Maybe<Array<Maybe<ModelVideoNode>>>;
  weight?: Maybe<Scalars["Int"]["output"]>;
};

export type ModelNodeConnection = {
  __typename?: "ModelNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<ModelNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `ModelNode` and its cursor. */
export type ModelNodeEdge = {
  __typename?: "ModelNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<ModelNode>;
};

/** An enumeration. */
export enum ModelNonVisibleServices {
  Anal = "ANAL",
  Anilingus = "ANILINGUS",
  AttentionToWomen = "ATTENTION_TO_WOMEN",
  CouplesService = "COUPLES_SERVICE",
  CumKiss = "CUM_KISS",
  DeepThroat = "DEEP_THROAT",
  DuplexService = "DUPLEX_SERVICE",
  EroticMassage = "EROTIC_MASSAGE",
  EroticSado = "EROTIC_SADO",
  EroticShower = "EROTIC_SHOWER",
  Facial = "FACIAL",
  Fantasies = "FANTASIES",
  Fetishes = "FETISHES",
  FrenchKissing = "FRENCH_KISSING",
  FullFrench = "FULL_FRENCH",
  GirlfriendExperience = "GIRLFRIEND_EXPERIENCE",
  GoldenShower = "GOLDEN_SHOWER",
  Kissing = "KISSING",
  Lesbian = "LESBIAN",
  NaturalOral = "NATURAL_ORAL",
  ProstateMassage = "PROSTATE_MASSAGE",
  SexToys = "SEX_TOYS",
  Squirting = "SQUIRTING",
  StrapOn = "STRAP_ON",
  SwingersClub = "SWINGERS_CLUB",
  Threesome = "THREESOME",
}

/** An enumeration. */
export enum ModelServices {
  CouplesService = "COUPLES_SERVICE",
  Dancing = "DANCING",
  DinnerWithFriends = "DINNER_WITH_FRIENDS",
  EroticReading = "EROTIC_READING",
  EventOutings = "EVENT_OUTINGS",
  GirlfriendExperience = "GIRLFRIEND_EXPERIENCE",
  GoPartying = "GO_PARTYING",
  GoShopping = "GO_SHOPPING",
  GoToDinner = "GO_TO_DINNER",
  HighProfileEvents = "HIGH_PROFILE_EVENTS",
  Parties = "PARTIES",
  PrivateEvents = "PRIVATE_EVENTS",
  PrivateParties = "PRIVATE_PARTIES",
  SalsaDancing = "SALSA_DANCING",
  Shopping = "SHOPPING",
  SwingDancing = "SWING_DANCING",
  Travel = "TRAVEL",
  WeekendGetaway = "WEEKEND_GETAWAY",
}

export type ModelVideoNode = Node & {
  __typename?: "ModelVideoNode";
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  model: ModelNode;
  videoUrl?: Maybe<Scalars["String"]["output"]>;
};

/** An enumeration. */
export enum ModelsModelEyesColorChoices {
  /** Black */
  Black = "BLACK",
  /** Blue */
  Blue = "BLUE",
  /** Brown */
  Brown = "BROWN",
  /** Green */
  Green = "GREEN",
  /** Hazel */
  Hazel = "HAZEL",
}

/** An enumeration. */
export enum ModelsModelGenderChoices {
  /** Transgender */
  Transgender = "TRANSGENDER",
  /** Woman */
  Woman = "WOMAN",
}

/** An enumeration. */
export enum ModelsModelHairColorChoices {
  /** Black */
  Black = "BLACK",
  /** Blonde */
  Blonde = "BLONDE",
  /** Brown */
  Brown = "BROWN",
  /** Other color */
  Other = "OTHER",
  /** Red */
  Red = "RED",
}

/** An enumeration. */
export enum ModelsModelNationalityChoices {
  /** Andorra */
  Ad = "AD",
  /** United Arab Emirates */
  Ae = "AE",
  /** Afghanistan */
  Af = "AF",
  /** Antigua and Barbuda */
  Ag = "AG",
  /** Anguilla */
  Ai = "AI",
  /** Albania */
  Al = "AL",
  /** Armenia */
  Am = "AM",
  /** Netherlands Antilles */
  An = "AN",
  /** Angola */
  Ao = "AO",
  /** Antarctica */
  Aq = "AQ",
  /** Argentina */
  Ar = "AR",
  /** AmericanSamoa */
  As = "AS",
  /** Austria */
  At = "AT",
  /** Australia */
  Au = "AU",
  /** Aruba */
  Aw = "AW",
  /** Aland Islands */
  Ax = "AX",
  /** Azerbaijan */
  Az = "AZ",
  /** Bosnia and Herzegovina */
  Ba = "BA",
  /** Barbados */
  Bb = "BB",
  /** Bangladesh */
  Bd = "BD",
  /** Belgium */
  Be = "BE",
  /** Burkina Faso */
  Bf = "BF",
  /** Bulgaria */
  Bg = "BG",
  /** Bahrain */
  Bh = "BH",
  /** Burundi */
  Bi = "BI",
  /** Benin */
  Bj = "BJ",
  /** Saint Barthelemy */
  Bl = "BL",
  /** Bermuda */
  Bm = "BM",
  /** Brunei Darussalam */
  Bn = "BN",
  /** Bolivia, Plurinational State of */
  Bo = "BO",
  /** Brazil */
  Br = "BR",
  /** Bahamas */
  Bs = "BS",
  /** Bhutan */
  Bt = "BT",
  /** Botswana */
  Bw = "BW",
  /** Belarus */
  By = "BY",
  /** Belize */
  Bz = "BZ",
  /** Canada */
  Ca = "CA",
  /** Cocos (Keeling) Islands */
  Cc = "CC",
  /** Congo, The Democratic Republic of the Congo */
  Cd = "CD",
  /** Central African Republic */
  Cf = "CF",
  /** Congo */
  Cg = "CG",
  /** Switzerland */
  Ch = "CH",
  /** Cote d'Ivoire */
  Ci = "CI",
  /** Cook Islands */
  Ck = "CK",
  /** Chile */
  Cl = "CL",
  /** Cameroon */
  Cm = "CM",
  /** China */
  Cn = "CN",
  /** Colombia */
  Co = "CO",
  /** Costa Rica */
  Cr = "CR",
  /** Cuba */
  Cu = "CU",
  /** Cape Verde */
  Cv = "CV",
  /** Christmas Island */
  Cx = "CX",
  /** Cyprus */
  Cy = "CY",
  /** Czech Republic */
  Cz = "CZ",
  /** Germany */
  De = "DE",
  /** Djibouti */
  Dj = "DJ",
  /** Denmark */
  Dk = "DK",
  /** Dominica */
  Dm = "DM",
  /** Dominican Republic */
  Do = "DO",
  /** Algeria */
  Dz = "DZ",
  /** Ecuador */
  Ec = "EC",
  /** Estonia */
  Ee = "EE",
  /** Egypt */
  Eg = "EG",
  /** Eritrea */
  Er = "ER",
  /** Spain */
  Es = "ES",
  /** Ethiopia */
  Et = "ET",
  /** Finland */
  Fi = "FI",
  /** Fiji */
  Fj = "FJ",
  /** Falkland Islands (Malvinas) */
  Fk = "FK",
  /** Micronesia, Federated States of Micronesia */
  Fm = "FM",
  /** Faroe Islands */
  Fo = "FO",
  /** France */
  Fr = "FR",
  /** Gabon */
  Ga = "GA",
  /** United Kingdom */
  Gb = "GB",
  /** Grenada */
  Gd = "GD",
  /** Georgia */
  Ge = "GE",
  /** French Guiana */
  Gf = "GF",
  /** Guernsey */
  Gg = "GG",
  /** Ghana */
  Gh = "GH",
  /** Gibraltar */
  Gi = "GI",
  /** Greenland */
  Gl = "GL",
  /** Gambia */
  Gm = "GM",
  /** Guinea */
  Gn = "GN",
  /** Guadeloupe */
  Gp = "GP",
  /** Equatorial Guinea */
  Gq = "GQ",
  /** Greece */
  Gr = "GR",
  /** South Georgia and the South Sandwich Islands */
  Gs = "GS",
  /** Guatemala */
  Gt = "GT",
  /** Guam */
  Gu = "GU",
  /** Guinea-Bissau */
  Gw = "GW",
  /** Guyana */
  Gy = "GY",
  /** Hong Kong */
  Hk = "HK",
  /** Honduras */
  Hn = "HN",
  /** Croatia */
  Hr = "HR",
  /** Haiti */
  Ht = "HT",
  /** Hungary */
  Hu = "HU",
  /** Indonesia */
  Id = "ID",
  /** Ireland */
  Ie = "IE",
  /** Israel */
  Il = "IL",
  /** Isle of Man */
  Im = "IM",
  /** India */
  In = "IN",
  /** British Indian Ocean Territory */
  Io = "IO",
  /** Iraq */
  Iq = "IQ",
  /** Iran, Islamic Republic of Persian Gulf */
  Ir = "IR",
  /** Iceland */
  Is = "IS",
  /** Italy */
  It = "IT",
  /** Jersey */
  Je = "JE",
  /** Jamaica */
  Jm = "JM",
  /** Jordan */
  Jo = "JO",
  /** Japan */
  Jp = "JP",
  /** Kenya */
  Ke = "KE",
  /** Kyrgyzstan */
  Kg = "KG",
  /** Cambodia */
  Kh = "KH",
  /** Kiribati */
  Ki = "KI",
  /** Comoros */
  Km = "KM",
  /** Saint Kitts and Nevis */
  Kn = "KN",
  /** Korea, Democratic People's Republic of Korea */
  Kp = "KP",
  /** Korea, Republic of South Korea */
  Kr = "KR",
  /** Kuwait */
  Kw = "KW",
  /** Cayman Islands */
  Ky = "KY",
  /** Kazakhstan */
  Kz = "KZ",
  /** Laos */
  La = "LA",
  /** Lebanon */
  Lb = "LB",
  /** Saint Lucia */
  Lc = "LC",
  /** Liechtenstein */
  Li = "LI",
  /** Sri Lanka */
  Lk = "LK",
  /** Liberia */
  Lr = "LR",
  /** Lesotho */
  Ls = "LS",
  /** Lithuania */
  Lt = "LT",
  /** Luxembourg */
  Lu = "LU",
  /** Latvia */
  Lv = "LV",
  /** Libyan Arab Jamahiriya */
  Ly = "LY",
  /** Morocco */
  Ma = "MA",
  /** Monaco */
  Mc = "MC",
  /** Moldova */
  Md = "MD",
  /** Montenegro */
  Me = "ME",
  /** Saint Martin */
  Mf = "MF",
  /** Madagascar */
  Mg = "MG",
  /** Marshall Islands */
  Mh = "MH",
  /** Macedonia */
  Mk = "MK",
  /** Mali */
  Ml = "ML",
  /** Myanmar */
  Mm = "MM",
  /** Mongolia */
  Mn = "MN",
  /** Macao */
  Mo = "MO",
  /** Northern Mariana Islands */
  Mp = "MP",
  /** Martinique */
  Mq = "MQ",
  /** Mauritania */
  Mr = "MR",
  /** Montserrat */
  Ms = "MS",
  /** Malta */
  Mt = "MT",
  /** Mauritius */
  Mu = "MU",
  /** Maldives */
  Mv = "MV",
  /** Malawi */
  Mw = "MW",
  /** Mexico */
  Mx = "MX",
  /** Malaysia */
  My = "MY",
  /** Mozambique */
  Mz = "MZ",
  /** Namibia */
  Na = "NA",
  /** New Caledonia */
  Nc = "NC",
  /** Niger */
  Ne = "NE",
  /** Norfolk Island */
  Nf = "NF",
  /** Nigeria */
  Ng = "NG",
  /** Nicaragua */
  Ni = "NI",
  /** Netherlands */
  Nl = "NL",
  /** Norway */
  No = "NO",
  /** Nepal */
  Np = "NP",
  /** Nauru */
  Nr = "NR",
  /** Niue */
  Nu = "NU",
  /** New Zealand */
  Nz = "NZ",
  /** Oman */
  Om = "OM",
  /** Panama */
  Pa = "PA",
  /** Peru */
  Pe = "PE",
  /** French Polynesia */
  Pf = "PF",
  /** Papua New Guinea */
  Pg = "PG",
  /** Philippines */
  Ph = "PH",
  /** Pakistan */
  Pk = "PK",
  /** Poland */
  Pl = "PL",
  /** Saint Pierre and Miquelon */
  Pm = "PM",
  /** Pitcairn */
  Pn = "PN",
  /** Puerto Rico */
  Pr = "PR",
  /** Palestinian Territory, Occupied */
  Ps = "PS",
  /** Portugal */
  Pt = "PT",
  /** Palau */
  Pw = "PW",
  /** Paraguay */
  Py = "PY",
  /** Qatar */
  Qa = "QA",
  /** Reunion */
  Re = "RE",
  /** Romania */
  Ro = "RO",
  /** Serbia */
  Rs = "RS",
  /** Russia */
  Ru = "RU",
  /** Rwanda */
  Rw = "RW",
  /** Saudi Arabia */
  Sa = "SA",
  /** Solomon Islands */
  Sb = "SB",
  /** Seychelles */
  Sc = "SC",
  /** Sudan */
  Sd = "SD",
  /** Sweden */
  Se = "SE",
  /** Singapore */
  Sg = "SG",
  /** Saint Helena, Ascension and Tristan Da Cunha */
  Sh = "SH",
  /** Slovenia */
  Si = "SI",
  /** Svalbard and Jan Mayen */
  Sj = "SJ",
  /** Slovakia */
  Sk = "SK",
  /** Sierra Leone */
  Sl = "SL",
  /** San Marino */
  Sm = "SM",
  /** Senegal */
  Sn = "SN",
  /** Somalia */
  So = "SO",
  /** Suriname */
  Sr = "SR",
  /** South Sudan */
  Ss = "SS",
  /** Sao Tome and Principe */
  St = "ST",
  /** El Salvador */
  Sv = "SV",
  /** Syrian Arab Republic */
  Sy = "SY",
  /** Swaziland */
  Sz = "SZ",
  /** Turks and Caicos Islands */
  Tc = "TC",
  /** Chad */
  Td = "TD",
  /** Togo */
  Tg = "TG",
  /** Thailand */
  Th = "TH",
  /** Tajikistan */
  Tj = "TJ",
  /** Tokelau */
  Tk = "TK",
  /** Timor-Leste */
  Tl = "TL",
  /** Turkmenistan */
  Tm = "TM",
  /** Tunisia */
  Tn = "TN",
  /** Tonga */
  To = "TO",
  /** Turkey */
  Tr = "TR",
  /** Trinidad and Tobago */
  Tt = "TT",
  /** Tuvalu */
  Tv = "TV",
  /** Taiwan */
  Tw = "TW",
  /** Tanzania, United Republic of Tanzania */
  Tz = "TZ",
  /** Ukraine */
  Ua = "UA",
  /** Uganda */
  Ug = "UG",
  /** United States */
  Us = "US",
  /** Uruguay */
  Uy = "UY",
  /** Uzbekistan */
  Uz = "UZ",
  /** Holy See (Vatican City State) */
  Va = "VA",
  /** Saint Vincent and the Grenadines */
  Vc = "VC",
  /** Venezuela, Bolivarian Republic of Venezuela */
  Ve = "VE",
  /** Virgin Islands, British */
  Vg = "VG",
  /** Virgin Islands, U.S. */
  Vi = "VI",
  /** Vietnam */
  Vn = "VN",
  /** Vanuatu */
  Vu = "VU",
  /** Wallis and Futuna */
  Wf = "WF",
  /** Samoa */
  Ws = "WS",
  /** Yemen */
  Ye = "YE",
  /** Mayotte */
  Yt = "YT",
  /** South Africa */
  Za = "ZA",
  /** Zambia */
  Zm = "ZM",
  /** Zimbabwe */
  Zw = "ZW",
}

/** An enumeration. */
export enum ModelsModelRangeTypeChoices {
  /** Regular */
  Regular = "REGULAR",
  /** Top */
  Top = "TOP",
  /** Vip */
  Vip = "VIP",
}

export type Mutation = {
  __typename?: "Mutation";
  activateModel?: Maybe<ActivateModelPayload>;
  changePassword?: Maybe<ChangePasswordPayload>;
  createModel?: Maybe<CreateModelPayload>;
  deactivateModel?: Maybe<DeactivateModelPayload>;
  deleteModel?: Maybe<DeleteModelPayload>;
  editModel?: Maybe<EditModelPayload>;
  refreshToken?: Maybe<Refresh>;
  tokenAuth?: Maybe<ObtainJsonWebTokenPayload>;
  updateUser?: Maybe<UpdateUserPayload>;
  verifyToken?: Maybe<Verify>;
};

export type MutationActivateModelArgs = {
  input: ActivateModelInput;
};

export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};

export type MutationCreateModelArgs = {
  input: CreateModelInput;
};

export type MutationDeactivateModelArgs = {
  input: DeactivateModelInput;
};

export type MutationDeleteModelArgs = {
  input: DeleteModelInput;
};

export type MutationEditModelArgs = {
  input: EditModelInput;
};

export type MutationRefreshTokenArgs = {
  token?: InputMaybe<Scalars["String"]["input"]>;
};

export type MutationTokenAuthArgs = {
  input: ObtainJsonWebTokenInput;
};

export type MutationUpdateUserArgs = {
  input: UpdateUserInput;
};

export type MutationVerifyTokenArgs = {
  token?: InputMaybe<Scalars["String"]["input"]>;
};

/** An object with an ID */
export type Node = {
  /** The ID of the object */
  id: Scalars["ID"]["output"];
};

export type ObtainJsonWebTokenInput = {
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
};

export type ObtainJsonWebTokenPayload = {
  __typename?: "ObtainJSONWebTokenPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  payload: Scalars["GenericScalar"]["output"];
  refreshExpiresIn: Scalars["Int"]["output"];
  token: Scalars["String"]["output"];
  user?: Maybe<UserNode>;
};

/** The Relay compliant `PageInfo` type, containing data necessary to paginate this connection. */
export type PageInfo = {
  __typename?: "PageInfo";
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars["String"]["output"]>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars["Boolean"]["output"];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars["String"]["output"]>;
};

/** An enumeration. */
export enum PhoneType {
  Call = "CALL",
  Telegram = "TELEGRAM",
  Whatsapp = "WHATSAPP",
}

export type Query = {
  __typename?: "Query";
  me?: Maybe<UserNode>;
  model?: Maybe<ModelNode>;
  models?: Maybe<ModelNodeConnection>;
};

export type QueryModelArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryModelsArgs = {
  activationDate_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  activationDate_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  activationDate_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  activationDate_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  age_Gte?: InputMaybe<Scalars["Int"]["input"]>;
  age_Lte?: InputMaybe<Scalars["Int"]["input"]>;
  attributes?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  boobs?: InputMaybe<Scalars["Boolean"]["input"]>;
  city?: InputMaybe<Scalars["ID"]["input"]>;
  createdAt_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  eyesColor?: InputMaybe<ModelsModelEyesColorChoices>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  gender?: InputMaybe<ModelsModelGenderChoices>;
  globalSearch?: InputMaybe<Scalars["String"]["input"]>;
  hairColor?: InputMaybe<ModelsModelHairColorChoices>;
  hasVideos?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  isFeatured?: InputMaybe<Scalars["Boolean"]["input"]>;
  isVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  languages?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  nationality?: InputMaybe<ModelsModelNationalityChoices>;
  nonVisibleServices?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  party?: InputMaybe<Scalars["Boolean"]["input"]>;
  piercings?: InputMaybe<Scalars["Boolean"]["input"]>;
  rangeType?: InputMaybe<ModelsModelRangeTypeChoices>;
  service_Modes?: InputMaybe<Scalars["String"]["input"]>;
  services?: InputMaybe<Scalars["String"]["input"]>;
  smoker?: InputMaybe<Scalars["Boolean"]["input"]>;
  tattoos?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  user_Id?: InputMaybe<Scalars["String"]["input"]>;
  user_Type?: InputMaybe<Scalars["String"]["input"]>;
};

export type Refresh = {
  __typename?: "Refresh";
  payload: Scalars["GenericScalar"]["output"];
  refreshExpiresIn: Scalars["Int"]["output"];
  token: Scalars["String"]["output"];
};

export type UpdateUserInput = {
  acceptHiddenCalls?: InputMaybe<Scalars["Boolean"]["input"]>;
  cityId: Scalars["String"]["input"];
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  email: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  phoneNumbers: Array<InputMaybe<UserPhoneInputType>>;
  userId: Scalars["String"]["input"];
};

export type UpdateUserPayload = {
  __typename?: "UpdateUserPayload";
  clientMutationId?: Maybe<Scalars["String"]["output"]>;
  user?: Maybe<UserNode>;
};

export type UserNode = Node & {
  __typename?: "UserNode";
  created: Scalars["DateTime"]["output"];
  email: Scalars["String"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  isActive: Scalars["Boolean"]["output"];
  isStaff: Scalars["Boolean"]["output"];
  /** Designates that this user has all permissions without explicitly assigning them. */
  isSuperuser: Scalars["Boolean"]["output"];
  lastLogin?: Maybe<Scalars["DateTime"]["output"]>;
  models: ModelNodeConnection;
  name: Scalars["String"]["output"];
  password: Scalars["String"]["output"];
  phoneNumbers: UserPhoneNodeConnection;
  updated: Scalars["DateTime"]["output"];
};

export type UserNodeModelsArgs = {
  activationDate_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  activationDate_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  activationDate_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  activationDate_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  age_Gte?: InputMaybe<Scalars["Int"]["input"]>;
  age_Lte?: InputMaybe<Scalars["Int"]["input"]>;
  attributes?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  boobs?: InputMaybe<Scalars["Boolean"]["input"]>;
  city?: InputMaybe<Scalars["ID"]["input"]>;
  createdAt_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  createdAt_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  eyesColor?: InputMaybe<ModelsModelEyesColorChoices>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  gender?: InputMaybe<ModelsModelGenderChoices>;
  globalSearch?: InputMaybe<Scalars["String"]["input"]>;
  hairColor?: InputMaybe<ModelsModelHairColorChoices>;
  hasVideos?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  isFeatured?: InputMaybe<Scalars["Boolean"]["input"]>;
  isVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  languages?: InputMaybe<Scalars["String"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
  nationality?: InputMaybe<ModelsModelNationalityChoices>;
  nonVisibleServices?: InputMaybe<Scalars["String"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
  orderBy?: InputMaybe<Scalars["String"]["input"]>;
  party?: InputMaybe<Scalars["Boolean"]["input"]>;
  piercings?: InputMaybe<Scalars["Boolean"]["input"]>;
  rangeType?: InputMaybe<ModelsModelRangeTypeChoices>;
  service_Modes?: InputMaybe<Scalars["String"]["input"]>;
  services?: InputMaybe<Scalars["String"]["input"]>;
  smoker?: InputMaybe<Scalars["Boolean"]["input"]>;
  tattoos?: InputMaybe<Scalars["Boolean"]["input"]>;
  updatedAt_Gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_Gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_Lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  updatedAt_Lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  user_Id?: InputMaybe<Scalars["String"]["input"]>;
  user_Type?: InputMaybe<Scalars["String"]["input"]>;
};

export type UserNodePhoneNumbersArgs = {
  after?: InputMaybe<Scalars["String"]["input"]>;
  before?: InputMaybe<Scalars["String"]["input"]>;
  first?: InputMaybe<Scalars["Int"]["input"]>;
  last?: InputMaybe<Scalars["Int"]["input"]>;
  offset?: InputMaybe<Scalars["Int"]["input"]>;
};

export type UserPhoneInputType = {
  countryCode: Scalars["String"]["input"];
  phone: Scalars["String"]["input"];
  type: PhoneType;
};

export type UserPhoneNode = Node & {
  __typename?: "UserPhoneNode";
  countryCode: Scalars["String"]["output"];
  /** The ID of the object */
  id: Scalars["ID"]["output"];
  phone: Scalars["String"]["output"];
  type: AccountsUserPhoneTypeChoices;
  user: UserNode;
};

export type UserPhoneNodeConnection = {
  __typename?: "UserPhoneNodeConnection";
  /** Contains the nodes in this connection. */
  edges: Array<Maybe<UserPhoneNodeEdge>>;
  /** Pagination data for this connection. */
  pageInfo: PageInfo;
};

/** A Relay edge containing a `UserPhoneNode` and its cursor. */
export type UserPhoneNodeEdge = {
  __typename?: "UserPhoneNodeEdge";
  /** A cursor for use in pagination */
  cursor: Scalars["String"]["output"];
  /** The item at the end of the edge */
  node?: Maybe<UserPhoneNode>;
};

export type Verify = {
  __typename?: "Verify";
  payload: Scalars["GenericScalar"]["output"];
};

export type LoginMutationMutationVariables = Exact<{
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type LoginMutationMutation = {
  __typename?: "Mutation";
  tokenAuth?: {
    __typename?: "ObtainJSONWebTokenPayload";
    token: string;
    payload: any;
    refreshExpiresIn: number;
    user?: { __typename?: "UserNode"; isStaff: boolean } | null;
  } | null;
};

export type MeQueryVariables = Exact<{ [key: string]: never }>;

export type MeQuery = {
  __typename?: "Query";
  me?: {
    __typename?: "UserNode";
    id: string;
    name: string;
    email: string;
    isActive: boolean;
    phoneNumbers: {
      __typename?: "UserPhoneNodeConnection";
      edges: Array<{
        __typename?: "UserPhoneNodeEdge";
        node?: {
          __typename?: "UserPhoneNode";
          id: string;
          phone: string;
          type: AccountsUserPhoneTypeChoices;
        } | null;
      } | null>;
    };
  } | null;
};

export type ActivateModelMutationVariables = Exact<{
  modelId: Scalars["String"]["input"];
}>;

export type ActivateModelMutation = {
  __typename?: "Mutation";
  activateModel?: {
    __typename?: "ActivateModelPayload";
    model?: { __typename?: "ModelNode"; id: string } | null;
  } | null;
};

export type DeactivateModelMutationVariables = Exact<{
  modelId: Scalars["String"]["input"];
}>;

export type DeactivateModelMutation = {
  __typename?: "Mutation";
  deactivateModel?: {
    __typename?: "DeactivateModelPayload";
    model?: { __typename?: "ModelNode"; id: string } | null;
  } | null;
};

export type ModelQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type ModelQuery = {
  __typename?: "Query";
  model?: {
    __typename?: "ModelNode";
    id: string;
    gender: ModelsModelGenderChoices;
    name: string;
    height?: number | null;
    metrics?: string | null;
    weight?: number | null;
    age: number;
    hairColor: ModelsModelHairColorChoices;
    eyesColor: ModelsModelEyesColorChoices;
    nationality: ModelsModelNationalityChoices;
    boobs: boolean;
    smoker: boolean;
    piercings: boolean;
    tattoos: boolean;
    party: boolean;
    languages?: Array<ModelLanguages | null> | null;
    rangeType: ModelsModelRangeTypeChoices;
    description?: string | null;
    isActive: boolean;
    isVerified: boolean;
    isFeatured: boolean;
    services?: Array<ModelServices | null> | null;
    nonVisibleServices: Array<string | null>;
    attributes: Array<string | null>;
    activationDate?: any | null;
    featuredDate?: any | null;
    images?: Array<{
      __typename?: "ModelImageNode";
      id: string;
      imageUrl?: string | null;
    } | null> | null;
    videos?: Array<{
      __typename?: "ModelVideoNode";
      id: string;
      videoUrl?: string | null;
    } | null> | null;
    user: {
      __typename?: "UserNode";
      name: string;
      phoneNumbers: {
        __typename?: "UserPhoneNodeConnection";
        edges: Array<{
          __typename?: "UserPhoneNodeEdge";
          node?: {
            __typename?: "UserPhoneNode";
            id: string;
            phone: string;
            type: AccountsUserPhoneTypeChoices;
          } | null;
        } | null>;
      };
    };
  } | null;
};

export type ModelsQueryVariables = Exact<{
  first?: InputMaybe<Scalars["Int"]["input"]>;
  after?: InputMaybe<Scalars["String"]["input"]>;
  isActive?: InputMaybe<Scalars["Boolean"]["input"]>;
  isVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  cityId?: InputMaybe<Scalars["ID"]["input"]>;
  name_Icontains?: InputMaybe<Scalars["String"]["input"]>;
}>;

export type ModelsQuery = {
  __typename?: "Query";
  models?: {
    __typename?: "ModelNodeConnection";
    pageInfo: {
      __typename?: "PageInfo";
      hasNextPage: boolean;
      hasPreviousPage: boolean;
      endCursor?: string | null;
      startCursor?: string | null;
    };
    edges: Array<{
      __typename?: "ModelNodeEdge";
      cursor: string;
      node?: {
        __typename?: "ModelNode";
        id: string;
        name: string;
        description?: string | null;
        rangeType: ModelsModelRangeTypeChoices;
        isActive: boolean;
        isVerified: boolean;
        isFeatured: boolean;
        activationDate?: any | null;
        createdAt: any;
        updatedAt: any;
        user: {
          __typename?: "UserNode";
          id: string;
          name: string;
          email: string;
        };
        images?: Array<{
          __typename?: "ModelImageNode";
          id: string;
          imageUrl?: string | null;
        } | null> | null;
      } | null;
    } | null>;
  } | null;
};

export const LoginMutationDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "LoginMutation" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "email" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "tokenAuth" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "email" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "email" },
                      },
                    },
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "password" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "password" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "token" } },
                { kind: "Field", name: { kind: "Name", value: "payload" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "refreshExpiresIn" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "isStaff" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LoginMutationMutation,
  LoginMutationMutationVariables
>;
export const MeDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Me" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "me" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "email" } },
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "phoneNumbers" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "edges" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "node" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "phone" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "type" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const ActivateModelDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "activateModel" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "modelId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "activateModel" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "modelId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "modelId" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "model" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  ActivateModelMutation,
  ActivateModelMutationVariables
>;
export const DeactivateModelDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "deactivateModel" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "modelId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deactivateModel" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "modelId" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "modelId" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "model" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeactivateModelMutation,
  DeactivateModelMutationVariables
>;
export const ModelDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Model" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "model" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "gender" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
                { kind: "Field", name: { kind: "Name", value: "metrics" } },
                { kind: "Field", name: { kind: "Name", value: "weight" } },
                { kind: "Field", name: { kind: "Name", value: "age" } },
                { kind: "Field", name: { kind: "Name", value: "hairColor" } },
                { kind: "Field", name: { kind: "Name", value: "eyesColor" } },
                { kind: "Field", name: { kind: "Name", value: "nationality" } },
                { kind: "Field", name: { kind: "Name", value: "boobs" } },
                { kind: "Field", name: { kind: "Name", value: "smoker" } },
                { kind: "Field", name: { kind: "Name", value: "piercings" } },
                { kind: "Field", name: { kind: "Name", value: "tattoos" } },
                { kind: "Field", name: { kind: "Name", value: "party" } },
                { kind: "Field", name: { kind: "Name", value: "gender" } },
                { kind: "Field", name: { kind: "Name", value: "languages" } },
                { kind: "Field", name: { kind: "Name", value: "rangeType" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
                { kind: "Field", name: { kind: "Name", value: "isActive" } },
                { kind: "Field", name: { kind: "Name", value: "isVerified" } },
                { kind: "Field", name: { kind: "Name", value: "isFeatured" } },
                { kind: "Field", name: { kind: "Name", value: "services" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "nonVisibleServices" },
                },
                { kind: "Field", name: { kind: "Name", value: "attributes" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "activationDate" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "featuredDate" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "images" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "imageUrl" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "videos" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "videoUrl" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "user" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "phoneNumbers" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "edges" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "node" },
                                    selectionSet: {
                                      kind: "SelectionSet",
                                      selections: [
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "id" },
                                        },
                                        {
                                          kind: "Field",
                                          name: {
                                            kind: "Name",
                                            value: "phone",
                                          },
                                        },
                                        {
                                          kind: "Field",
                                          name: { kind: "Name", value: "type" },
                                        },
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ModelQuery, ModelQueryVariables>;
export const ModelsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "Models" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "first" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "after" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "isActive" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "isVerified" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Boolean" } },
        },
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "cityId" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "name_Icontains" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "String" } },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "models" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "first" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "first" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "after" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "after" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "isActive" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "isActive" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "isVerified" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "isVerified" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "city" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "cityId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "name_Icontains" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "name_Icontains" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "pageInfo" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasNextPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasPreviousPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "endCursor" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "startCursor" },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "edges" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "cursor" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "node" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "description" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "rangeType" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isActive" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isVerified" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "isFeatured" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "activationDate" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "createdAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "updatedAt" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "user" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "name" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "email" },
                                  },
                                ],
                              },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "images" },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "id" },
                                  },
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "imageUrl" },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ModelsQuery, ModelsQueryVariables>;
