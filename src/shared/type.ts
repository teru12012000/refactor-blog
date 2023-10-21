export type bodytype={
    fieldId:string;
    body:string;
}
export type codetype={
    fieldId:string;
    code:string;
}
export type languagetype={
    fieldId:string;
    langage:string[];
}
export type blogdata={
    id:string;
    createdAt: string;
    updatedAt: string;
    publishedA: string;
    revisedAt: string;
    title:string;
    body:bodytype[];
    detail:string;
    code:codetype[];
    langage:languagetype[],
    kind:string[],
    kind2:string[],
}

export type titledata={
    kind1:string;
    kind2:string;
}

export type link={
    link:string;
    name:string;
}

export type contentType={
    data:blogdata;
    length:number;
}