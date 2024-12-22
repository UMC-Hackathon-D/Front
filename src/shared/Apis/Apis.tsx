import { serverInstance } from "@shared/apiInstance/index";
import { PersonalData } from "@pages/groupMember/groupMember";
const getData = async ({
    partyId,
    pathType,
}: {
    partyId: number;
    pathType: "collection" | "users";
}) => {
    console.log(pathType);

    let url = `api/v1/parties/${partyId}/${pathType}`;

    console.log(url);

    try {
        const { data } = await serverInstance.get(url);
        return data.success.data;
    } catch (error) {
        console.error;
    }
};
const getDetailData = async ({
    partyId,
    pathType,
    CMid,
}: {
    partyId: number;
    pathType: "collection" | "users";
    CMid: number;
}) => {
    console.log(pathType);
    console.log(CMid);

    let url = `api/v1/parties/${partyId}/collection/complete_missions/${CMid}`;

    console.log(url);

    try {
        const { data } = await serverInstance.get(url);
        return data.success.data;
    } catch (error) {
        console.error;
    }
};

const deleteData = async ({ partyId, id }: { partyId: number; id: number }) => {
    console.log(partyId, id);
    try {
        const { data } = await serverInstance.patch(
            `api/v1/parties/${partyId}/users/${id}/delete`
        );
        console.log(data);

        return data;
    } catch (error) {
        console.error;
    }
};

const updateData = async ({
    partyId,
    id,
    name,
}: {
    partyId: number;
    id: number;
    name: string;
}) => {
    console.log(partyId, id, name);
    try {
        const { data } = await serverInstance.patch(
            `api/v1/parties/${partyId}/users/${id}/rename`,
            { userName: name }
        );
        console.log(data);

        return data;
    } catch (error) {
        console.error;
    }
};
export { getData, deleteData, updateData };
