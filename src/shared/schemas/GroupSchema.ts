import { z } from "zod";

const groupNameRegex = /^[a-zA-Z가-힣]+$/u; // 이모티콘 제외, 공백 불가
const nicknameRegex = /^[a-zA-Z가-힣]+$/u; // 이모티콘 제외, 공백 불가
const groupCodeRegex = /^\d{4,8}$/; // 4~8자리 숫자

export const groupFormSchema = z.object({
    partyName: z
        .string()
        .regex(
            groupNameRegex,
            "그룹 이름은 공백 및 이모티콘을 제외한 문자만 입력할 수 있습니다."
        )
        .max(20, "그룹 이름은 최대 20자까지 입력할 수 있습니다."),
    name: z
        .string()
        .regex(
            nicknameRegex,
            "닉네임은 공백 및 이모티콘을 제외한 문자만 입력할 수 있습니다."
        )
        .max(20, "닉네임은 최대 20자까지 입력할 수 있습니다."),
    numMember: z.preprocess((value) => {
        const parsedValue = parseInt(value as string, 10);
        return isNaN(parsedValue) ? undefined : parsedValue;
    }, z.number().int().optional()),
    password: z
        .string()
        .regex(
            groupCodeRegex,
            "그룹 코드는 4~8자리 숫자만 입력할 수 있습니다."
        ),
});
