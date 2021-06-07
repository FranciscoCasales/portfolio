export interface TimeLineDescModel {
  desc: string;
}

export interface TimeLineDetailModel {
  job: string;
  company: string;
  period: string;
  right?: boolean;
}

export interface TimeLineModel extends TimeLineDescModel, TimeLineDetailModel {
  id: number;
}
