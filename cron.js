const cron = require('node-cron');

// test run ok
// (async ()=>{
//     const user = await db.any(spend.getAll);
//     const limidInfor = await db.any(limid.getAll);

//     for(let i = 0;i<user.length;i++){
//         console.log(i);
//         await db.none(spend.resetLimid,[limidInfor[user[i].limid_id-1].limid,user[i].id]);

//     }
//     console.log("done");

// })();

// cron.schedule('0 0 0 * * *', async() => {
//     const user = await db.any(spend.getAll);
//     const limidInfor = await db.any(limid.getAll);

//     for(let i = 0;i<user.length;i++){
//         await db.none(spend.resetLimid,[limidInfor[user[i].limid_id-1].limid,user[i].id]);
//     }
// });
