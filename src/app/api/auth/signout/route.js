const {Cookie, cookies} = require('next/headers');

export async function POST() {
    cookies().delete('token');
    return Response.json({message:'Logout is done'} ,{status:200})
}