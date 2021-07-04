import axios from "axios";
import humps from "humps";

export const archiveRecord =
  (record_type, record_id, archiveCallback) => (e) => {
    e.stopPropagation();
    e.preventDefault();
    axios({
      headers: { record: record_type },
      method: "PATCH",
      url: `/archives/${record_id}`,
      data: {
        authenticity_token: $('meta[name="csrf-token"]').attr("content"),
      },
    }).then((response) => {
      console.log(response);
      console.log(response.data);
      archiveCallback(humps.camelizeKeys(response.data));
    });
  };
