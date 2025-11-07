export interface ActorsTypeRow {
    id_actor: number | null;
    actor_name: string;
    actor_email: string;
    password_hash_actor: string;
}

export class Actors {
    protected id_actor: number | null;
    protected actor_name: string;
    protected actor_email: string;
    protected password_hash_actor: string;

    constructor(
        id_actor: number | null,
        actor_name: string,
        actor_email: string,
        password_hash_actor: string,
    ) {
        this.id_actor = id_actor;
        this.actor_name = actor_name;
        this.actor_email = actor_email;
        this.password_hash_actor = password_hash_actor;
    }

    getIdActor = () => {
        return this.id_actor;
    };

    getActorName = () => {
        return this.actor_name;
    };

    getActorEmail = () => {
        return this.actor_email;
    };

    getPasswordHashActor = () => {
        return this.password_hash_actor;
    };
}