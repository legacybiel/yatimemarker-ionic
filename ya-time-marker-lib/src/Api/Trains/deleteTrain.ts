//region Preamble
/**
 * SPDX-License-Identifier: MIT
 * Copyright © 2021 Gabriel Rodrigues
 */
//endregion

import { getDbTrains } from "../../db";
import { getTrain } from "./getTrain";

export async function deleteTrain(id: string): Promise<void> {
  const dbTrains = await getDbTrains();
  await getTrain(id).then((doc) => dbTrains.remove(doc));
}
