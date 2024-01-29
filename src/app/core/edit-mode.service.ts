import { Injectable } from '@angular/core';

export interface EditSession {
    docType: DocumentType;
    docId: string;
}

type DocumentType = 'RECIPE';

@Injectable({
    providedIn: 'root'
})
export class EditModeService {
    editSessions: EditSession[] = [];

    constructor() { }

    addAnEditSession(editSession: EditSession): void {
        this.editSessions = [...this.editSessions, editSession];
    }

    removeAnEditSession(editSession: EditSession): void {
        const index = this.editSessions.findIndex(session => session === editSession);
        this.editSessions = [...this.editSessions.splice(index, 1)];
    }

    isAnEditSessionInProgress(editSession: EditSession): boolean {
        return this.editSessions.some(session => session === editSession);
    }

}
