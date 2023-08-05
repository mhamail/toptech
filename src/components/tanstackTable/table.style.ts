import styled from "@emotion/styled";

export const TableStyle = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
  }
  td,
  th {
    text-align: center;
    padding: 8px;
  }
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  tr:hover {
    background-color: #ddd;
  }
  th {
    padding-top: 12px;
    padding-bottom: 12px;
    background-color: rgba(0,0,0,0.8);
    color: white;
  }
`;
