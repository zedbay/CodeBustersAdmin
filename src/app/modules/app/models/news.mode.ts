import { Buster } from "src/app/shared/models/buster";
import { Job } from "src/app/shared/models/job";
import { Project } from "src/app/shared/models/project";
import { Event } from "src/app/shared/models/event";

export interface News {
  content: string;
  title: string;
}

export type NewsId = 'jobId' | 'busterId' | 'eventId' | 'projectId';

export type NewsType = Buster | Event | Project | Job;

