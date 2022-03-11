import { Buster } from "src/app/shared/models/buster";
import { Job } from "src/app/shared/models/job";
import { Project } from "src/app/shared/models/project";
import { Event } from "src/app/shared/models/event";
import { imgPath } from "src/app/shared/constants/imgPath";

export interface News {
  content: string;
  title: string;
  newsType: NewsTypeLiteral;
  imgPath: string;
  createdDate: string;
  objectId: number;
}

export type NewsTypeLiteral = 'Buster' | 'Project' | 'Event' | 'Job';
export type NewsId = 'jobId' | 'busterId' | 'eventId' | 'projectId';

export const typeNewsToProperties: { [key in NewsTypeLiteral]: { imgPath: string, queryParam: NewsId } } = {
  ['Buster']: { imgPath: imgPath.sweat, queryParam: 'busterId' },
  ['Project']: {
    imgPath: imgPath.earth

    , queryParam: 'projectId'
  },
  ['Event']: { imgPath: imgPath.calendar, queryParam: 'eventId' },
  ['Job']: { imgPath: imgPath.hat, queryParam: 'jobId' }
};

export type NewsType = Buster | Event | Project | Job;

export const typeNewsToCallToAction: { [key in NewsTypeLiteral]: { tranformToNews: (item: NewsType) => News } } = {
  ['Buster']: {
    tranformToNews: (buster: Buster) => ({
      content: buster.description,
      title: `${buster.firstName} ${buster.lastName}`,
      newsType: 'Buster',
      imgPath: typeNewsToProperties.Buster.imgPath,
      createdDate: buster.createdDate,
      objectId: buster.id
    })
  },
  ['Project']: {
    tranformToNews: (project: Project) => ({
      content: project.description,
      title: project.name,
      newsType: 'Project',
      imgPath: typeNewsToProperties.Project.imgPath,
      createdDate: project.createdDate,
      objectId: project.id
    })
  },
  ['Event']: {
    tranformToNews: (event: Event) => ({
      content: event.description,
      title: event.name,
      newsType: 'Event',
      imgPath: typeNewsToProperties.Event.imgPath,
      createdDate: event.createdDate,
      objectId: event.id
    })
  },
  ['Job']: {
    tranformToNews: (job: Job) => ({
      content: job.description,
      title: job.title,
      newsType: 'Job',
      imgPath: typeNewsToProperties.Job.imgPath,
      createdDate: job.createdDate,
      objectId: job.id
    })
  }
}




