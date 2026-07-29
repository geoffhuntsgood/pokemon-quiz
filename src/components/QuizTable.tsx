import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import { useMemo } from "react";
import { Ability, Move, Pokemon } from "../classes";
import type { ItemList } from "../utils/types";
import { TypeBadge } from "./TypeBadge";

export const QuizTable = ({
  headers,
  items,
  foundItems,
  done
}: {
  headers: string[];
  items: ItemList;
  foundItems: string[];
  done: boolean;
}) => {
  const styles = {
    width:
      window.innerWidth < 800
        ? "90vw"
        : window.innerWidth >= 800 && window.innerWidth < 1600
          ? "45vw"
          : "30vw"
  };

  const getName = (name: string) => {
    if (foundItems.includes(name)) {
      return name;
    } else if (done) {
      return <span style={{ color: "red" }}>{name}</span>;
    } else {
      return "";
    }
  };

  const getImg = (p: Pokemon) => {
    let imgName = "empty";
    if (foundItems.includes(p.displayName) || done) {
      imgName = p.img ? p.img : p.name;
    }
    return `img/pokemon/${imgName}.png`;
  };

  const MemoizedPokeRow = (p: Pokemon) => {
    const memoName = getName(p.displayName);

    return useMemo(
      () => (
        <TableRow key={p.displayName}>
          <TableCell>{p.dex}</TableCell>
          <TableCell>
            <img
              height="50"
              style={{
                marginLeft: "-1.5rem",
                marginTop: "-1.5rem"
              }}
              src={getImg(p)}
            />
            {memoName}
          </TableCell>
          <TableCell>
            <TypeBadge type={p.type} type2={p.type2} />
          </TableCell>
        </TableRow>
      ),
      [memoName, p]
    );
  };

  const MemoizedMoveRow = (m: Move) => {
    const memoName = getName(m.displayName);

    const getThirdCol = () => {
      const ref = (items[0] as Move).type;
      if ((items as Move[]).every((move: Move) => move.type === ref)) {
        return m.category.toUpperCase();
      } else {
        return <TypeBadge type={m.type} />;
      }
    };

    return useMemo(
      () => (
        <TableRow key={`${m.displayName}-${Math.random()}`}>
          <TableCell>{m.number}</TableCell>
          <TableCell>{memoName}</TableCell>
          <TableCell>{getThirdCol()}</TableCell>
        </TableRow>
      ),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [memoName, m]
    );
  };

  const MemoizedAbilRow = (a: Ability) => {
    const memoName = getName(a.displayName);

    return useMemo(
      () => (
        <TableRow key={a.displayName}>
          <TableCell>{a.number}</TableCell>
          <TableCell>{memoName}</TableCell>
          <TableCell>{a.description}</TableCell>
        </TableRow>
      ),
      [memoName, a]
    );
  };

  const getTableRows = () => {
    if (items.length > 0) {
      if ("dex" in items[0]) {
        return items.map((p) => MemoizedPokeRow(p as Pokemon));
      } else if ("description" in items[0]) {
        return items.map((a) => MemoizedAbilRow(a as Ability));
      } else {
        return items.map((m) => MemoizedMoveRow(m as Move));
      }
    }
  };

  return (
    <TableContainer style={styles}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell width="10%">{headers[0]}</TableCell>
            <TableCell>{headers[1]}</TableCell>
            <TableCell width="30%">{headers[2]}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{getTableRows()}</TableBody>
      </Table>
    </TableContainer>
  );
};
