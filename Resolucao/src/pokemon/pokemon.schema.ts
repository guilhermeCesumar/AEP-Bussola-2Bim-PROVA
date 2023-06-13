import { Schema, model } from "mongoose";

const PokemonSchema = new Schema(
  {
    nome: {
      required: true,
      type: String,
    },
    tipo: {
      required: true,
      type: Array,
    },
    status: {
      required: true,
      type: Array,
    },
    numeroDex: {
      required: true,
      type: Number,
    },
    altura: {
      required: true,
      type: Number,
    },
    peso: {
      required: true,
      type: Number,
    },
    moves: {
      required: true,
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

export default model("Pokemon", PokemonSchema);
