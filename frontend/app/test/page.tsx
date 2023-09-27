"use client";

import { useRef, useState, useEffect } from "react";
import { useInfiniteQuery, useIsFetching, useIsFetchingNextPage } from "@tanstack/react-query";
import axios from "axios";
import { useObserver } from "@/components/Search/useObserver";

const OFFSET = 30;

const getPokemonList = ({ pageParam = OFFSET }) =>
  axios
    .get("https://pokeapi.co/api/v2/pokemon", {
      params: {
        limit: OFFSET,
        offset: pageParam,
      },
    })
    .then((res) => res?.data);

const Test = () => {
  // 바닥 ref를 위한 useRef 선언
  const bottom = useRef(null);
  const [hasMorePages, setHasMorePages] = useState(true);

  const { data, error, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage, status } =
    useInfiniteQuery(["pokemonList"], getPokemonList, {
      getNextPageParam: (lastPage) => {
        const { next } = lastPage;

        if (!next) return false;

        return Number(new URL(next).searchParams.get("offset"));
      },
    });

  const handleFetchNextPage = () => {
    if (hasMorePages && hasNextPage) {
      fetchNextPage();
    }
  };
  // useObserver로 넘겨줄 callback, entry로 넘어오는 HTMLElement가
  // isIntersecting이라면 무한 스크롤을 위한 fetchNextPage가 실행될 것이다.
  const onIntersect = ([entry]) => {
    if (entry.isIntersecting && hasMorePages) {
      handleFetchNextPage();
    }
  };

  // useObserver로 bottom ref와 onIntersect를 넘겨 주자.
  useObserver({
    target: bottom,
    onIntersect,
  });

  // 데이터를 모두 가져왔을 때 hasMorePages 상태를 false로 설정
  useEffect(() => {
    if (!hasNextPage) {
      setHasMorePages(false);
    }
  }, [hasNextPage]);

  return (
    <div>
      {status === "loading" && <p>불러오는 중</p>}
      {status === "error" && <p>{error.message}</p>}
      {status === "success" && (
        <div>
          {data.pages.map((group, index) => (
            <div key={index}>
              {group.results.map((pokemon) => (
                <p key={pokemon.name}>{pokemon.name}</p>
              ))}
            </div>
          ))}
        </div>
      )}
      {/* {hasMorePages && hasNextPage && <button onClick={handleFetchNextPage}>더 불러오기</button>} */}
      <div ref={bottom} />
      {isFetchingNextPage && <p>계속 불러오는 중</p>}
    </div>
  );
};

export default Test;
