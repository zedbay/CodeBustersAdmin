import { TestBed } from '@angular/core/testing';
import { Resource } from '@core/models/ressource';
import { NetworkService } from './network.service';
import { ENDPOINT, ResourcesService } from './resources.service';

describe('ResourcesService', () => {

    let service: ResourcesService<Resource>;
    const fakeNetworkService = {};

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                { provide: NetworkService, useValue: fakeNetworkService },
                { provide: ENDPOINT, useValue: '/endpoint' }
            ]
        });
        service = TestBed.inject(ResourcesService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

});
