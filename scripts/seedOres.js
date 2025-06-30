import mongoose from 'mongoose';

const ORES = [
  { id: 'coal', name: 'Coal Ore', xpPerSecond: 1, goldValue: 1, tier: 1 },
  { id: 'copper', name: 'Copper Ore', xpPerSecond: 1.5, goldValue: 2, tier: 2 }
];

const OreSchema = new mongoose.Schema({
  id: String,
  name: String,
  xpPerSecond: Number,
  goldValue: Number,
  tier: Number
});

const Ore = mongoose.models.Ore || mongoose.model('Ore', OreSchema);

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  await Ore.deleteMany({});
  await Ore.insertMany(ORES);
  console.log('Seeded ores.');
  process.exit();
}

seed();
