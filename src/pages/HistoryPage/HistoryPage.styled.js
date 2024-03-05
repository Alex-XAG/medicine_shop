import styled from '@emotion/styled';

export const HistoryPageBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 1200px;
`;

export const HistorySearchBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */

  padding: 20px;
  margin-top: 30px;
  width: 300px;

  border: 1px solid rgba(0, 0, 255);
  border-radius: 8px;
`;

export const HistoryUserList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  overflow-y: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;

  height: 400px;
  width: 800px;

  border: 1px solid rgba(0, 0, 255);
  border-radius: 8px;
`;

export const HistoryItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  /* max-height: 350px; */
  border: 1px solid rgba(0, 0, 255);
  border-radius: 10px;
  padding: 10px;
`;

export const HistoryOrderList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
`;
export const HistoryItemOrder = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 200px;

  /* max-height: 350px; */
  border: 1px solid rgba(0, 0, 255);
  border-radius: 10px;
  padding: 10px;
`;

export const HistoryTitle = styled.h3`
  padding: 0;
  margin: 0;
`;

export const HistoryText = styled.p`
  padding: 0;
  margin: 0;

  font-weight: 700;
`;
