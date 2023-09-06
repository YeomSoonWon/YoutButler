'use client'

import React, { useEffect, useState } from 'react';

const SeoulMap: React.FC = () => {
  const [map, setMap] = useState<any>(null);
  const [polygons, setPolygons] = useState<any[]>([]);

  useEffect(() => {
    const fetchSeoulData = async () => {
      try {
        const response = await fetch("/seoul_gson.geojson");
        const geojson = await response.json();
        return geojson.features;
      } catch (error) {
        console.error("서울 데이터를 가져오는 중 오류 발생:", error);
        return [];
      }
    };

    const initializeMap = async () => {
      const data = await fetchSeoulData();

      if (window.kakao && window.kakao.maps) {
        // 카카오 지도 API 초기화
        window.kakao.maps.load(() => {
          const mapContainer = document.getElementById("map");
          const mapOptions = {
            center: new window.kakao.maps.LatLng(37.566826, 126.9786567),
            level: 9,
          };
          const kakaoMap = new window.kakao.maps.Map(mapContainer, mapOptions);
          setMap(kakaoMap);

          const customOverlay = new window.kakao.maps.CustomOverlay({
            map: null,
          });

          const newPolygons = data.map((val) => {
            const coordinates = val.geometry.coordinates;
            const name = val.properties.SIG_KOR_NM;

            // 폴리곤 그리기.
            const path = coordinates[0].map((coordinate: number[]) => {
              const latLng = new window.kakao.maps.LatLng(coordinate[1], coordinate[0]);
              return latLng;
            });

            const polygon = new window.kakao.maps.Polygon({
              map: kakaoMap,
              path: path,
              strokeWeight: 2,
              strokeColor: '#004c80',
              strokeOpacity: 0.8,
              fillColor: '#fff',
              fillOpacity: 0.7,
            });

            window.kakao.maps.event.addListener(polygon, 'mouseover', function (mouseEvent) {
              polygon.setOptions({
                fillColor: '#09f',
              });

              customOverlay.setContent('<div class="area">' + name + '</div>');

              customOverlay.setPosition(mouseEvent.latLng);
              customOverlay.setMap(kakaoMap);
            });

            window.kakao.maps.event.addListener(polygon, 'mousemove', function (mouseEvent) {
              customOverlay.setPosition(mouseEvent.latLng);
            });

            window.kakao.maps.event.addListener(polygon, 'mouseout', function () {
              polygon.setOptions({
                fillColor: '#fff',
              });
              customOverlay.setMap(null);
            });

            window.kakao.maps.event.addListener(polygon, 'click', function () {
              const level = kakaoMap.getLevel() - 2;
              kakaoMap.setLevel(level, {
                anchor: centroid(path),
                animate: {
                  duration: 350,
                },
              });

              deletePolygon(newPolygons);
            });

            // 레벨 변경 이벤트 감시
            window.kakao.maps.event.addListener(kakaoMap, 'zoom_changed', function () {
              const currentLevel = kakaoMap.getLevel();
              if (currentLevel <= 7) {
                // 레벨이 7 이하이면 폴리곤 숨기기
                polygon.setMap(null);
              } else {
                // 레벨이 7 초과이면 폴리곤 표시하기
                polygon.setMap(kakaoMap);
              }
            });

            return polygon;
          });

          setPolygons(newPolygons);
        });
      }
    };

    const deletePolygon = (polygonsToDelete: any[]) => {
      polygonsToDelete.forEach((polygon) => {
        polygon.setMap(null);
      });
    };

    const centroid = (pointsArray: any[]) => {
      const totalPoints = pointsArray.length;
      const center = pointsArray.reduce((acc, point) => {
        acc.x += point.getLng();
        acc.y += point.getLat();
        return acc;
      }, { x: 0, y: 0 });

      return new window.kakao.maps.LatLng(center.y / totalPoints, center.x / totalPoints);
    };

    initializeMap();
  }, []);

  return <div id="map" style={{ width: '100%', height: '100%' }} />;
};

export default SeoulMap;
