const Fullname = " Phakhaphon  Srimok ";
console.log(`Fullname ${Fullname}`);

const cleanname = Fullname.trim();
console.log(`cleanname ${cleanname}`);

const nameParts = cleanname.split(" ");
console.log(`nameParts ${nameParts}`)

const finalParts = nameParts.filter(Boolean);
console.log(`finalparts ${finalParts}`)

const firstname = finalParts[0];
console.log(`first ${firstname}`)
