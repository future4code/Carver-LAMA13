import knex from "knex";
import Knex   from "knex";


export abstract class BaseDatabase {

    private static connection: Knex | null = null;

    protected getConnection(): Knex{
        if(!BaseDatabase.connection){
            BaseDatabase.connection = knex({
                client: "mysql",
                connection: {
                  host: process.env.DB_HOST,
                  user: process.env.DB_USER,
                  database: process.env.DB_SCHEMA,
                  port: Number(process.env.DB_PORT),
                  password: process.env.DB_PASSWORD,
                },
              });        
        }

        return BaseDatabase.connection;
    }

    public static async destroyConnection(): Promise<void>{
        if(BaseDatabase.connection){
            await BaseDatabase.connection.destroy();
            BaseDatabase.connection = null;
        }
    }
}