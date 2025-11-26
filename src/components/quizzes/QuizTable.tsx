import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@mui/material";
import { useMemo } from "react";
import type { Ability, Move, Pokemon } from "../../classes";
import type { HeaderList } from "../../utils/HeaderList";
import { TypeBadge } from "../TypeBadge";

export const QuizTable = ({
  headers,
  items,
  foundItems,
  done
}: {
  headers: HeaderList;
  items: Pokemon[] | Move[] | Ability[];
  foundItems: string[];
  done: boolean;
}) => {
  const styles = {
    fixedTable: {
      tableLayout: "fixed",
      width: "25rem"
    },
    firstTableItem: {
      width: "5%"
    },
    lastTableItem: {
      width: "20%"
    }
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
                marginLeft: "-24px",
                marginTop: "-20px",
                marginBottom: "-10px"
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
        return m.cat;
      } else {
        return <TypeBadge type={m.type} />;
      }
    };

    return useMemo(
      () => (
        <TableRow key={`${m.displayName}-${Math.random()}`}>
          <TableCell>{m.num}</TableCell>
          <TableCell>{memoName}</TableCell>
          <TableCell>{getThirdCol()}</TableCell>
        </TableRow>
      ),
      [memoName, m]
    );
  };

  const MemoizedAbilRow = (a: Ability) => {
    const memoName = getName(a.displayName);

    return useMemo(
      () => (
        <TableRow key={a.displayName}>
          <TableCell>{a.num}</TableCell>
          <TableCell>{memoName}</TableCell>
          <TableCell>{a.description}</TableCell>
        </TableRow>
      ),
      [memoName, a]
    );
  };

  const getTableRows = () => {
    if ("dex" in items[0]) {
      return items.map((p) => MemoizedPokeRow(p as Pokemon));
    } else if ("cat" in items[0]) {
      return items.map((m) => MemoizedMoveRow(m as Move));
    } else if ("description" in items[0]) {
      return items.map((a) => MemoizedAbilRow(a as Ability));
    } else {
      return [];
    }
  };

  return (
    <Table stickyHeader sx={styles.fixedTable}>
      <TableHead>
        <TableRow>
          <TableCell sx={styles.firstTableItem}>{headers[0]}</TableCell>
          <TableCell>{headers[1]}</TableCell>
          <TableCell sx={styles.lastTableItem}>{headers[2]}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>{getTableRows()}</TableBody>
    </Table>
  );
};
