export interface NearScreenModel {
  ref: React.MutableRefObject<null | Element> | undefined;
  threshold?: number;
  onlyOnce?: boolean;
}
