import { LookupViewModel } from 'codera-shared';

export class ChangeRequestTypeViewModel {
    constructor(
        public Id?: number,
        public Name?: string,
        public AttachmentRequiredBeforeClose?: boolean,
        public Status?: boolean,
    ) { 
        this.Status = true;
    }
}

export class ChangeRequestTypeGridModel extends ChangeRequestTypeViewModel {
    constructor(
        public Id?: number,
        public Name?: string,
        public Status?: boolean,
        public ModifiedBy?: LookupViewModel,
        public ModifiedAt?: Date
    ) {
        super(Id, Name, Status);
    }
}
