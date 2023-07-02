import db from "@/database/database";
import { error, serie } from "@/protocols/series.protocol";

export async function post(serie: serie):Promise<void>{
    const { name, gender, status } = serie;
    await db.query(`
    INSERT INTO series 
    (name, gender, status)
    VALUES ($1, $2, $3);`, 
    [name, gender, status]);
    return
};

export async function get(){
    const series = await db.query(`SELECT * FROM series;`);
    return series.rows;
};

export async function deleteById (id:number): Promise<void>{
    const idExists = await db.query(`SELECT * FROM series WHERE id=$1;`, [id]);
    console.log(idExists.rows)
    if(!idExists.rows[0]){
        throw {name: "Not Found", message: "Id não encontrado!"} as error
    }

    await db.query(`DELETE FROM series WHERE id=$1;`, [id]);
    return;
};

export async function updateById(id: number, serie: serie): Promise<void>{
    const { name, gender, status } = serie;
    const idExists = await db.query(`SELECT * FROM series WHERE id=$1;`, [id]);

    if(!idExists.rows[0]){
        throw {name: "Not Found", message: "Id não encontrado!"} as error
    }

    await db.query(`
    UPDATE series 
    SET name=$1, gender=$2, status=$3 
    WHERE id=$4;`,
    [name, gender, status, id]);
    return;
};