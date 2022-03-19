export interface ProfileSettings {
  color?: string;
  backgroundColor?: string;
  [key: string]: string | number | undefined; // color and backgroundColor are explicitly defined in requirements, adding generic key value pair as failsafe for future profile settings addtions
}
