"use client";

import { useState } from "react";
import { Actions, PetAction } from "./Actions";
import { Details } from "./Details";
import { PetImage } from "./Image";
import { Summary } from "./Summary";
import { AptogotchiCollection } from "@/components/AptogotchiCollection";
import { usePet } from "@/context/PetContext";

export interface Pet {
  name: string;
  birthday: number;
  energy_points: number;
  parts: PetParts;
}

export interface PetParts {
  body: number;
  ear: number;
  face: number;
}

export const DEFAULT_PET = {
  name: "Unknown",
  energy_points: 0,
  parts: {
    body: 0,
    ear: 0,
    face: 0,
  },
};

export function Pet() {
  const { pet, setPet } = usePet();
  const [selectedAction, setSelectedAction] = useState<PetAction>("play");

  return (
    <div className="flex flex-col self-center m-10">
      <div className="flex flex-row self-center gap-12">
        <div className="flex flex-col gap-4 w-[360px]">
          <PetImage
            selectedAction={selectedAction}
            petParts={pet?.parts}
            avatarStyle
          />
          <Details />
        </div>
        <div className="flex flex-col gap-8 w-[680px] h-full">
          <Actions
            selectedAction={selectedAction}
            setSelectedAction={setSelectedAction}
          />
          <Summary />
        </div>
      </div>
      <AptogotchiCollection />
    </div>
  );
}
