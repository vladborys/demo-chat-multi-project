export interface File{
    id: string;
    type: 'file';
    topicId: string;
    filename: string;
    description?:string;
    /** File address in Blob */
    file: string; 
    /** Address of parsed file in Blob (parsed by document intelligence) */
    doc_intel: string;
    createdAt: string;
    updatedAt: string;
}