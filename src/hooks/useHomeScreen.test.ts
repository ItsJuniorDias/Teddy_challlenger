import { renderHook, act } from "@testing-library/react-hooks";
import { useHomeScreen } from "./useHomeScreen";

jest.mock("axios", () => ({
  create: jest.fn(),
  delete: jest.fn(),
  post: jest.fn().mockRejectedValue({}),
  patch: jest.fn(),
  get: jest.fn().mockRejectedValue({}),
}));

describe("Behavior InputBottomSheet", () => {
  it("should call function fetch", () => {
    const { result } = renderHook(() => useHomeScreen());

    act(() => {
      result.current.fetch();
    });

    expect(typeof result.current.fetch).toBe("function");
  });
  it("should call function createUser", () => {
    const { result } = renderHook(() => useHomeScreen());

    act(() => {
      result.current.createUser();
    });

    expect(typeof result.current.createUser).toBe("function");
  });
});
